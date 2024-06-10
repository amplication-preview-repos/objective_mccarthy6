import * as graphql from "@nestjs/graphql";
import { GoogleWalletCardInputDto } from "../googleWallet/GoogleWalletCardInputDto";
import { GoogleWalletCardOutputDto } from "../googleWallet/GoogleWalletCardOutputDto";
import { GoogleWalletService } from "./googlewallet.service";

export class GoogleWalletResolver {
  constructor(protected readonly service: GoogleWalletService) {}

  @graphql.Query(() => String)
  async CreateGoogleWalletCard(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateGoogleWalletCard(args);
  }

  @graphql.Mutation(() => GoogleWalletCardOutputDto)
  async CreateGoogleWalletCardAction(
    @graphql.Args()
    args: GoogleWalletCardInputDto
  ): Promise<GoogleWalletCardOutputDto> {
    return this.service.CreateGoogleWalletCardAction(args);
  }
}
