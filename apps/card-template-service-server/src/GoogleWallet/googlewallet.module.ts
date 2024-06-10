import { Module } from "@nestjs/common";
import { GoogleWalletService } from "./googlewallet.service";
import { GoogleWalletController } from "./googlewallet.controller";
import { GoogleWalletResolver } from "./googlewallet.resolver";

@Module({
  controllers: [GoogleWalletController],
  providers: [GoogleWalletService, GoogleWalletResolver],
  exports: [GoogleWalletService],
})
export class GoogleWalletModule {}
