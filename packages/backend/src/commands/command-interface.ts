export interface CommandInterface {
  execute(): void;
  getCommandAlias(): string;
}
