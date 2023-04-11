export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONSUMER_KEY: string;
      REDIRECT_URI: string;
    }
  }
}
