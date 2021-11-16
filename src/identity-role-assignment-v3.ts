// https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_assignment_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityRoleAssignmentV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_assignment_v3.html#domain_id IdentityRoleAssignmentV3#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_assignment_v3.html#group_id IdentityRoleAssignmentV3#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_assignment_v3.html#project_id IdentityRoleAssignmentV3#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_assignment_v3.html#role_id IdentityRoleAssignmentV3#role_id}
  */
  readonly roleId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_assignment_v3.html#user_id IdentityRoleAssignmentV3#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_assignment_v3.html opentelekomcloud_identity_role_assignment_v3}
*/
export class IdentityRoleAssignmentV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_identity_role_assignment_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_assignment_v3.html opentelekomcloud_identity_role_assignment_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityRoleAssignmentV3Config
  */
  public constructor(scope: Construct, id: string, config: IdentityRoleAssignmentV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_role_assignment_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainId = config.domainId;
    this._groupId = config.groupId;
    this._projectId = config.projectId;
    this._roleId = config.roleId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string | undefined; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string | undefined) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string | undefined; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string | undefined) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string | undefined; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string | undefined; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string | undefined) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      group_id: cdktf.stringToTerraform(this._groupId),
      project_id: cdktf.stringToTerraform(this._projectId),
      role_id: cdktf.stringToTerraform(this._roleId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
