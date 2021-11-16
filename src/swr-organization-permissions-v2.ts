// https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_organization_permissions_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwrOrganizationPermissionsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_organization_permissions_v2.html#auth SwrOrganizationPermissionsV2#auth}
  */
  readonly auth: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_organization_permissions_v2.html#organization SwrOrganizationPermissionsV2#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_organization_permissions_v2.html#user_id SwrOrganizationPermissionsV2#user_id}
  */
  readonly userId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_organization_permissions_v2.html#username SwrOrganizationPermissionsV2#username}
  */
  readonly username: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_organization_permissions_v2.html#timeouts SwrOrganizationPermissionsV2#timeouts}
  */
  readonly timeouts?: SwrOrganizationPermissionsV2Timeouts;
}
export interface SwrOrganizationPermissionsV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_organization_permissions_v2.html#default SwrOrganizationPermissionsV2#default}
  */
  readonly default?: string;
}

function swrOrganizationPermissionsV2TimeoutsToTerraform(struct?: SwrOrganizationPermissionsV2TimeoutsOutputReference | SwrOrganizationPermissionsV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class SwrOrganizationPermissionsV2TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default - computed: false, optional: true, required: false
  private _default?: string | undefined; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string | undefined) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_organization_permissions_v2.html opentelekomcloud_swr_organization_permissions_v2}
*/
export class SwrOrganizationPermissionsV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_swr_organization_permissions_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_organization_permissions_v2.html opentelekomcloud_swr_organization_permissions_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwrOrganizationPermissionsV2Config
  */
  public constructor(scope: Construct, id: string, config: SwrOrganizationPermissionsV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_swr_organization_permissions_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._auth = config.auth;
    this._organization = config.organization;
    this._userId = config.userId;
    this._username = config.username;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: false, required: true
  private _auth?: number; 
  public get auth() {
    return this.getNumberAttribute('auth');
  }
  public set auth(value: number) {
    this._auth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SwrOrganizationPermissionsV2Timeouts | undefined; 
  private __timeoutsOutput = new SwrOrganizationPermissionsV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SwrOrganizationPermissionsV2Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cdktf.numberToTerraform(this._auth),
      organization: cdktf.stringToTerraform(this._organization),
      user_id: cdktf.stringToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
      timeouts: swrOrganizationPermissionsV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
