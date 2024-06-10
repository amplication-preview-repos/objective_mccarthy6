import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GoogleWalletService } from "./googlewallet.service";
import { GoogleWalletCardInputDto } from "../googleWallet/GoogleWalletCardInputDto";
import { GoogleWalletCardOutputDto } from "../googleWallet/GoogleWalletCardOutputDto";

@swagger.ApiTags("googleWallets")
@common.Controller("googleWallets")
export class GoogleWalletController {
  constructor(protected readonly service: GoogleWalletService) {}

  @common.Get("/:id/create-google-wallet-card")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateGoogleWalletCard(
    @common.Body()
    body: GoogleWalletCardInputDto
  ): Promise<string> {
        return this.service.CreateGoogleWalletCard(body);
      }

  @common.Post("/google-wallet/create")
  @swagger.ApiOkResponse({
    type: GoogleWalletCardOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateGoogleWalletCardAction(
    @common.Body()
    body: GoogleWalletCardInputDto
  ): Promise<GoogleWalletCardOutputDto> {
        return this.service.CreateGoogleWalletCardAction(body);
      }
}
