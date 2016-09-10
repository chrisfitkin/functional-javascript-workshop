function getShortMessages(messages) {
  return messages.filter(function(messageWrapper) {
    return messageWrapper.message.length < 50;
  }).map(function(messageWrapper) {
    return messageWrapper.message;
  })
}

module.exports = getShortMessages
