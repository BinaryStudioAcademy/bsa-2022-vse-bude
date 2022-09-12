import type { CommandInterface } from './command-interface';

export class BaseCommand implements CommandInterface {
  protected commandAlias: string;

  constructor() {
    this.commandAlias = 'default';
  }

  execute(): void {
    return;
  }

  getCommandAlias(): string {
    return this.commandAlias;
  }
}
