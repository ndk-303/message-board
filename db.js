const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

async function getAllMessages() {
    return messages;
}

async function getMessage(id) {
    return messages[id];
}

async function addMessage(message) {
    messages.push(message);
}


module.exports = { getAllMessages, getMessage, addMessage };