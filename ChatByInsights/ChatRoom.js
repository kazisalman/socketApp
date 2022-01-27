import React, {Component} from 'react';
import { StyleSheet,View,Text,TextInput, TouchableOpacity } from 'react-native';
import io from "socket.io-client";

export class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }

  componentDidMount() {
      console.log("Rendered")
      this.socket = io("http://127.0.0.1:4000");
      this.socket.on('chat message', msg => {
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
      });
    this.socket.on('connect', () => console.log('connected'));
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
    this.state.chatMessages.push(this.state.chatMessage)
  }

  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage, index) => (
        <View >
        <Text key={index} style={{borderWidth: 1, top:30, fontSize:30, color:"red"}}>{chatMessage}</Text>
        </View>
      ));
    return (
      <View style={styles.container}>
        {chatMessages}
        <TextInput
          style={{height: 40, borderWidth: 2, marginTop:400, color:"green"}}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({chatMessage});
          }}
        />
        {/* <TouchableOpacity onPress={this.submitChatMessage} style={{backgroundColor:"lightgrey",marginTop:30}} >
            <Text style={{fontSize:30, color:"#000",textAlign:"center"}}>Submit</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default ChatRoom;
