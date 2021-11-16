// https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudVpnaasServiceV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#admin_state_up DataOpentelekomcloudVpnaasServiceV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#description DataOpentelekomcloudVpnaasServiceV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#external_v4_ip DataOpentelekomcloudVpnaasServiceV2#external_v4_ip}
  */
  readonly externalV4Ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#external_v6_ip DataOpentelekomcloudVpnaasServiceV2#external_v6_ip}
  */
  readonly externalV6Ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#flavor_id DataOpentelekomcloudVpnaasServiceV2#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#id DataOpentelekomcloudVpnaasServiceV2#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#name DataOpentelekomcloudVpnaasServiceV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#project_id DataOpentelekomcloudVpnaasServiceV2#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#region DataOpentelekomcloudVpnaasServiceV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#router_id DataOpentelekomcloudVpnaasServiceV2#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#status DataOpentelekomcloudVpnaasServiceV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#subnet_id DataOpentelekomcloudVpnaasServiceV2#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html#tenant_id DataOpentelekomcloudVpnaasServiceV2#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html opentelekomcloud_vpnaas_service_v2}
*/
export class DataOpentelekomcloudVpnaasServiceV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpnaas_service_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2.html opentelekomcloud_vpnaas_service_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudVpnaasServiceV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudVpnaasServiceV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpnaas_service_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminStateUp = config.adminStateUp;
    this._description = config.description;
    this._externalV4Ip = config.externalV4Ip;
    this._externalV6Ip = config.externalV6Ip;
    this._flavorId = config.flavorId;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
    this._routerId = config.routerId;
    this._status = config.status;
    this._subnetId = config.subnetId;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable | undefined; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up') as any;
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable | undefined) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // external_v4_ip - computed: false, optional: true, required: false
  private _externalV4Ip?: string | undefined; 
  public get externalV4Ip() {
    return this.getStringAttribute('external_v4_ip');
  }
  public set externalV4Ip(value: string | undefined) {
    this._externalV4Ip = value;
  }
  public resetExternalV4Ip() {
    this._externalV4Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalV4IpInput() {
    return this._externalV4Ip
  }

  // external_v6_ip - computed: false, optional: true, required: false
  private _externalV6Ip?: string | undefined; 
  public get externalV6Ip() {
    return this.getStringAttribute('external_v6_ip');
  }
  public set externalV6Ip(value: string | undefined) {
    this._externalV6Ip = value;
  }
  public resetExternalV6Ip() {
    this._externalV6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalV6IpInput() {
    return this._externalV6Ip
  }

  // flavor_id - computed: false, optional: true, required: false
  private _flavorId?: string | undefined; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string | undefined) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId
  }

  // id - computed: false, optional: true, required: false
  private _id?: string | undefined; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string | undefined; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string | undefined) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId
  }

  // status - computed: false, optional: true, required: false
  private _status?: string | undefined; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string | undefined; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string | undefined; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      description: cdktf.stringToTerraform(this._description),
      external_v4_ip: cdktf.stringToTerraform(this._externalV4Ip),
      external_v6_ip: cdktf.stringToTerraform(this._externalV6Ip),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      router_id: cdktf.stringToTerraform(this._routerId),
      status: cdktf.stringToTerraform(this._status),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }
}
