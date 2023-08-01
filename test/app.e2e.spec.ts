import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/stock?sku=:sku (GET) should get sku quantity count ', () => {
    return request(app.getHttpServer())
      .get('/stock?sku=ENN169733/05/69')
      .expect(200)
      .expect({
        status: 200,
        success: true,
        data: { sku: 'ENN169733/05/69', qty: 9591 },
        message: 'Succesfully fetched stock details',
      });
  });
});
