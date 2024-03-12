import { Injectable } from '@nestjs/common';
import { MyLibraryService } from '@app/my-library';
// import { MyLibraryService } from '@angelpuc08/my-library';
import { InfoselSdkManager } from '@infosel-sdk/core';
import InfoselSDKMarket from '@infosel-sdk/markets';

@Injectable()
export class AppService {
  constructor(private readonly myLibraryService: MyLibraryService) {}
  getHello(): string {
    return this.myLibraryService.hello();
  }

  getAddition(num1: number, num2: number) {
    return this.myLibraryService.addition(num1, num2);
  }

  getSubtraction(num1: number, num2: number) {
    return this.myLibraryService.subtraction(num1, num2);
  }

  getMultiplication(num1: number, num2: number) {
    return this.myLibraryService.multiplication(num1, num2);
  }

  getDivision(num1: number, num2: number) {
    return this.myLibraryService.division(num1, num2);
  }

  async historicalChart(instrumentKey: string) {
    const chartData = await MarketSDK.getChartData({
      instrumentKey,
      period: { type: 'year', value: 120, interval: 'D' },
    });

    return chartData;
  }
}

const GRANT_TYPE = 'client_credentials';
const CLIENT_ID = 'api-factset';
const CLIENT_SECRET = 'bbfe3c6f-04fe-497b-9535-bdedf0148c25';

export const sdkManager = InfoselSdkManager.init({
  mode: 'qa',
  authProviderConfig: {
    type: 'key-cloak',
    credentials: {
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    },
  },
});

export const MarketSDK = InfoselSDKMarket.init({ sdkManager });

// export const initSDK = async () => {
//   let authToken: AuthToken;
//   await sdkManager.authProvider
//     .generateToken('')
//     .then((auth) => {
//       authToken = auth;
//       Logger.log(`Token: ${authToken.accessToken}`);
//     })
//     .catch(async (err) => {
//       Logger.error(err);
//       authToken = await sdkManager.authProvider.refreshToken('');
//       Logger.log(`Refreshed token: ${authToken.accessToken}`);
//     });
// };
