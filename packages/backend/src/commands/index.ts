import { logger } from '@helpers';

const commands = {};

const args = process.argv;
const defaultArgsCount = 2;

if (args.length === defaultArgsCount) {
  console.error('Specify name of the command!');

  process.exit(0);
}

const commandAlias: string = args[2];

if (!Object.keys(commands).includes(commandAlias)) {
  console.error(`Undefined command '${commandAlias}'`);

  process.exit(0);
}

const command = commands[commandAlias];

command
  .execute()
  .then(() => {
    logger.log(`Command ${commandAlias} successfully finished!`);
  })
  .catch((error) => {
    throw error;
  });

export {};
