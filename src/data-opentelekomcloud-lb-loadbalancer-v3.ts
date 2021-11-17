// https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_loadbalancer_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudLbLoadbalancerV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_loadbalancer_v3.html#l4_flavor DataOpentelekomcloudLbLoadbalancerV3#l4_flavor}
  */
  readonly l4Flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_loadbalancer_v3.html#l7_flavor DataOpentelekomcloudLbLoadbalancerV3#l7_flavor}
  */
  readonly l7Flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_loadbalancer_v3.html#name DataOpentelekomcloudLbLoadbalancerV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_loadbalancer_v3.html#router_id DataOpentelekomcloudLbLoadbalancerV3#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_loadbalancer_v3.html#subnet_id DataOpentelekomcloudLbLoadbalancerV3#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_loadbalancer_v3.html#vip_address DataOpentelekomcloudLbLoadbalancerV3#vip_address}
  */
  readonly vipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_loadbalancer_v3.html#vip_port_id DataOpentelekomcloudLbLoadbalancerV3#vip_port_id}
  */
  readonly vipPortId?: string;
}
export class DataOpentelekomcloudLbLoadbalancerV3PublicIp extends cdktf.ComplexComputedList {

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // bandwidth_charge_mode - computed: true, optional: false, required: false
  public get bandwidthChargeMode() {
    return this.getStringAttribute('bandwidth_charge_mode');
  }

  // bandwidth_name - computed: true, optional: false, required: false
  public get bandwidthName() {
    return this.getStringAttribute('bandwidth_name');
  }

  // bandwidth_share_type - computed: true, optional: false, required: false
  public get bandwidthShareType() {
    return this.getStringAttribute('bandwidth_share_type');
  }

  // bandwidth_size - computed: true, optional: false, required: false
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_type - computed: true, optional: false, required: false
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_loadbalancer_v3.html opentelekomcloud_lb_loadbalancer_v3}
*/
export class DataOpentelekomcloudLbLoadbalancerV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_loadbalancer_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_loadbalancer_v3.html opentelekomcloud_lb_loadbalancer_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudLbLoadbalancerV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudLbLoadbalancerV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_loadbalancer_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._l4Flavor = config.l4Flavor;
    this._l7Flavor = config.l7Flavor;
    this._name = config.name;
    this._routerId = config.routerId;
    this._subnetId = config.subnetId;
    this._vipAddress = config.vipAddress;
    this._vipPortId = config.vipPortId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: true, optional: false, required: false
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up') as any;
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_target_enable - computed: true, optional: false, required: false
  public get ipTargetEnable() {
    return this.getBooleanAttribute('ip_target_enable') as any;
  }

  // l4_flavor - computed: true, optional: true, required: false
  private _l4Flavor?: string | undefined; 
  public get l4Flavor() {
    return this.getStringAttribute('l4_flavor');
  }
  public set l4Flavor(value: string | undefined) {
    this._l4Flavor = value;
  }
  public resetL4Flavor() {
    this._l4Flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4FlavorInput() {
    return this._l4Flavor
  }

  // l7_flavor - computed: true, optional: true, required: false
  private _l7Flavor?: string | undefined; 
  public get l7Flavor() {
    return this.getStringAttribute('l7_flavor');
  }
  public set l7Flavor(value: string | undefined) {
    this._l7Flavor = value;
  }
  public resetL7Flavor() {
    this._l7Flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7FlavorInput() {
    return this._l7Flavor
  }

  // name - computed: true, optional: true, required: false
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

  // network_ids - computed: true, optional: false, required: false
  public get networkIds() {
    return this.getListAttribute('network_ids');
  }

  // public_ip - computed: true, optional: false, required: false
  public publicIp(index: string) {
    return new DataOpentelekomcloudLbLoadbalancerV3PublicIp(this, 'public_ip', index);
  }

  // router_id - computed: true, optional: true, required: false
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

  // subnet_id - computed: true, optional: true, required: false
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

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vip_address - computed: true, optional: true, required: false
  private _vipAddress?: string | undefined; 
  public get vipAddress() {
    return this.getStringAttribute('vip_address');
  }
  public set vipAddress(value: string | undefined) {
    this._vipAddress = value;
  }
  public resetVipAddress() {
    this._vipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipAddressInput() {
    return this._vipAddress
  }

  // vip_port_id - computed: true, optional: true, required: false
  private _vipPortId?: string | undefined; 
  public get vipPortId() {
    return this.getStringAttribute('vip_port_id');
  }
  public set vipPortId(value: string | undefined) {
    this._vipPortId = value;
  }
  public resetVipPortId() {
    this._vipPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortIdInput() {
    return this._vipPortId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      l4_flavor: cdktf.stringToTerraform(this._l4Flavor),
      l7_flavor: cdktf.stringToTerraform(this._l7Flavor),
      name: cdktf.stringToTerraform(this._name),
      router_id: cdktf.stringToTerraform(this._routerId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vip_address: cdktf.stringToTerraform(this._vipAddress),
      vip_port_id: cdktf.stringToTerraform(this._vipPortId),
    };
  }
}
