import '@babel/polyfill'

import app from '../src/server.js';
// import { connect } from '../src/database.js'

async function main() {
    await app.listen(app.get('port'));
    // await connect();
    console.log('Server on port: ', app.get('port'))
}

main();