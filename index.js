const wa = require('@open-wa/wa-automate');
const cron = require('node-cron')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const hi_number = "85263614737";

wa.create().then(client => { claim(client) });

async function claim(client) { 

	// contoh run setiap hari pada pukul 13:37 menurut localtime system
	cron.schedule('37 13 * * *', async () => {
	    await client.sendText(hi_number + "@c.us", 'hi');
	    await delay(60000)
	    await client.sendText(hi_number + "@c.us", '1');
	    await delay(60000)
	    await client.sendText(hi_number + "@c.us", '1');
	})
	
}
