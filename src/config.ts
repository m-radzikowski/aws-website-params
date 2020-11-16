import configFile from './config.json';

export const config = configFile as Config;

export interface Config {
    env: string;
    apiUrl: string;
}
