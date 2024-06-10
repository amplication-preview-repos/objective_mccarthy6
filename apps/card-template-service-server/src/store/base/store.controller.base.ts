/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { StoreService } from "../store.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { StoreCreateInput } from "./StoreCreateInput";
import { Store } from "./Store";
import { StoreFindManyArgs } from "./StoreFindManyArgs";
import { StoreWhereUniqueInput } from "./StoreWhereUniqueInput";
import { StoreUpdateInput } from "./StoreUpdateInput";
import { StaffFindManyArgs } from "../../staff/base/StaffFindManyArgs";
import { Staff } from "../../staff/base/Staff";
import { StaffWhereUniqueInput } from "../../staff/base/StaffWhereUniqueInput";
import { TemplateFindManyArgs } from "../../template/base/TemplateFindManyArgs";
import { Template } from "../../template/base/Template";
import { TemplateWhereUniqueInput } from "../../template/base/TemplateWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class StoreControllerBase {
  constructor(
    protected readonly service: StoreService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Store })
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createStore(@common.Body() data: StoreCreateInput): Promise<Store> {
    return await this.service.createStore({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        address: true,
        contactInformation: true,
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Store] })
  @ApiNestedQuery(StoreFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async stores(@common.Req() request: Request): Promise<Store[]> {
    const args = plainToClass(StoreFindManyArgs, request.query);
    return this.service.stores({
      ...args,
      select: {
        address: true,
        contactInformation: true,
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async store(
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Store | null> {
    const result = await this.service.store({
      where: params,
      select: {
        address: true,
        contactInformation: true,
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateStore(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() data: StoreUpdateInput
  ): Promise<Store | null> {
    try {
      return await this.service.updateStore({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          address: true,
          contactInformation: true,
          createdAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteStore(
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Store | null> {
    try {
      return await this.service.deleteStore({
        where: params,
        select: {
          address: true,
          contactInformation: true,
          createdAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/staffItems")
  @ApiNestedQuery(StaffFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Staff",
    action: "read",
    possession: "any",
  })
  async findStaffItems(
    @common.Req() request: Request,
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Staff[]> {
    const query = plainToClass(StaffFindManyArgs, request.query);
    const results = await this.service.findStaffItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,

        store: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/staffItems")
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "update",
    possession: "any",
  })
  async connectStaffItems(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: StaffWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      staffItems: {
        connect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/staffItems")
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "update",
    possession: "any",
  })
  async updateStaffItems(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: StaffWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      staffItems: {
        set: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/staffItems")
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "update",
    possession: "any",
  })
  async disconnectStaffItems(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: StaffWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      staffItems: {
        disconnect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/templates")
  @ApiNestedQuery(TemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "read",
    possession: "any",
  })
  async findTemplates(
    @common.Req() request: Request,
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Template[]> {
    const query = plainToClass(TemplateFindManyArgs, request.query);
    const results = await this.service.findTemplates(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        design: true,
        id: true,

        store: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/templates")
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "update",
    possession: "any",
  })
  async connectTemplates(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: TemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      templates: {
        connect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/templates")
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "update",
    possession: "any",
  })
  async updateTemplates(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: TemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      templates: {
        set: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/templates")
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "update",
    possession: "any",
  })
  async disconnectTemplates(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: TemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      templates: {
        disconnect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }
}
