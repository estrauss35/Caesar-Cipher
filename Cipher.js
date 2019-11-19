function Encrypt(message, shift)
{
    var encryptedMessage = [];
    for(var i = 0; i < message.length; i++)
    {
        if(message[i] != ' ')
        {
            var id = ((message[i].toLowerCase().charCodeAt(0) - 97) + shift) % 26
            console.log(id + 97);
            encryptedMessage.push(String.fromCharCode(id));
        }
    }
    return encryptedMessage;
}

console.log(Encrypt("Hello There X", 5));