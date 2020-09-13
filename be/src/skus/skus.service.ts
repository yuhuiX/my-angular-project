import { FindSkuOptions, Sku } from './skus.interfaces';

import { Injectable } from '@nestjs/common';

@Injectable()
export class SkusService {
  private readonly skus: Sku[];

  constructor() {
    this.skus = [
      {
        id: 'sku-1',
        sku: '11111',
      },
      {
        id: 'sku-2',
        sku: '22222',
      },
      {
        id: 'sku-3',
        sku: '33333',
      },
    ];
  }

  findSku({ sku }: FindSkuOptions): Promise<Sku[]> {
    let skus: Sku[];
    if (sku === undefined) {
      skus = this.skus;
    } else {
      skus = this.skus.filter(skuData => {
        return skuData.sku === sku;
      });
    }

    return Promise.resolve(skus);
  }
}
