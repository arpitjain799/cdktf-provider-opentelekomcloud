// https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudNetworkingPortV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#admin_state_up DataOpentelekomcloudNetworkingPortV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#device_id DataOpentelekomcloudNetworkingPortV2#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#device_owner DataOpentelekomcloudNetworkingPortV2#device_owner}
  */
  readonly deviceOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#fixed_ip DataOpentelekomcloudNetworkingPortV2#fixed_ip}
  */
  readonly fixedIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#mac_address DataOpentelekomcloudNetworkingPortV2#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#name DataOpentelekomcloudNetworkingPortV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#network_id DataOpentelekomcloudNetworkingPortV2#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#port_id DataOpentelekomcloudNetworkingPortV2#port_id}
  */
  readonly portId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#project_id DataOpentelekomcloudNetworkingPortV2#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#region DataOpentelekomcloudNetworkingPortV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#security_group_ids DataOpentelekomcloudNetworkingPortV2#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#status DataOpentelekomcloudNetworkingPortV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html#tenant_id DataOpentelekomcloudNetworkingPortV2#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html opentelekomcloud_networking_port_v2}
*/
export class DataOpentelekomcloudNetworkingPortV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_networking_port_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2.html opentelekomcloud_networking_port_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudNetworkingPortV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudNetworkingPortV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_port_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminStateUp = config.adminStateUp;
    this._deviceId = config.deviceId;
    this._deviceOwner = config.deviceOwner;
    this._fixedIp = config.fixedIp;
    this._macAddress = config.macAddress;
    this._name = config.name;
    this._networkId = config.networkId;
    this._portId = config.portId;
    this._projectId = config.projectId;
    this._region = config.region;
    this._securityGroupIds = config.securityGroupIds;
    this._status = config.status;
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

  // all_fixed_ips - computed: true, optional: false, required: false
  public get allFixedIps() {
    return this.getListAttribute('all_fixed_ips');
  }

  // all_security_group_ids - computed: true, optional: false, required: false
  public get allSecurityGroupIds() {
    return this.getListAttribute('all_security_group_ids');
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string | undefined; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string | undefined) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId
  }

  // device_owner - computed: false, optional: true, required: false
  private _deviceOwner?: string | undefined; 
  public get deviceOwner() {
    return this.getStringAttribute('device_owner');
  }
  public set deviceOwner(value: string | undefined) {
    this._deviceOwner = value;
  }
  public resetDeviceOwner() {
    this._deviceOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOwnerInput() {
    return this._deviceOwner
  }

  // fixed_ip - computed: false, optional: true, required: false
  private _fixedIp?: string | undefined; 
  public get fixedIp() {
    return this.getStringAttribute('fixed_ip');
  }
  public set fixedIp(value: string | undefined) {
    this._fixedIp = value;
  }
  public resetFixedIp() {
    this._fixedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpInput() {
    return this._fixedIp
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string | undefined; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string | undefined) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string | undefined; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string | undefined) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId
  }

  // port_id - computed: false, optional: true, required: false
  private _portId?: string | undefined; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string | undefined) {
    this._portId = value;
  }
  public resetPortId() {
    this._portId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId
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

  // region - computed: false, optional: true, required: false
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

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[] | undefined; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[] | undefined) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds
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
      device_id: cdktf.stringToTerraform(this._deviceId),
      device_owner: cdktf.stringToTerraform(this._deviceOwner),
      fixed_ip: cdktf.stringToTerraform(this._fixedIp),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      port_id: cdktf.stringToTerraform(this._portId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      status: cdktf.stringToTerraform(this._status),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }
}
