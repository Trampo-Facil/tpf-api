import { Injectable } from '@nestjs/common';
import {
  TypeOrmHealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';

@Injectable()
export class DatabaseHealthCheck {
  private readonly key = 'database';
  constructor(private readonly db: TypeOrmHealthIndicator) {}

  async checkHealth(): Promise<HealthIndicatorResult> {
    return await this.db.pingCheck(this.key, { timeout: 3000 });
  }
}
