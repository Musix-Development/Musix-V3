module.exports = {
    name: 'end',
    alias: 'e',
    usage: '',
    description: 'end the queue',
    onlyDev: true,
    permission: 'dev',
    category: 'util',
    async execute(msg, args, client, Discord, prefix, command) {
        client.queue.delete(guild.id);
        msg.channel.send('Queue deleted!');
    }
};