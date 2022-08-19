import type { PrismaClient, News } from '@prisma/client';
import { Get, Query, Route, Tags } from 'tsoa';

@Route('news')
@Tags('News')
export class NewsRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  @Get('getAll')
  public getAll(@Query() take: number): Promise<News[]> {
    return this._dbClient.news.findMany({
      take,
    });
  }
}
