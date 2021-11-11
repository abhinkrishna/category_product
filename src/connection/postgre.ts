import { ConnectionOptions, createConnection } from "typeorm"

const initDatabase = async (options: ConnectionOptions) => {
    return await createConnection(options);
}

export default initDatabase;