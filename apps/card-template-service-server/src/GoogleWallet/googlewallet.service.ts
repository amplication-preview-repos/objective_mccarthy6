import { Injectable } from "@nestjs/common";
import { GoogleWalletCardInputDto } from "../googleWallet/GoogleWalletCardInputDto";
import { GoogleWalletCardOutputDto } from "../googleWallet/GoogleWalletCardOutputDto";

@Injectable()
export class GoogleWalletService {
  constructor() {}
  async CreateGoogleWalletCard(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateGoogleWalletCardAction(args: GoogleWalletCardInputDto): Promise<GoogleWalletCardOutputDto> {
    throw new Error("Not implemented");
  }
}
