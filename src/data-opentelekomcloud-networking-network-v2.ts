// https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_network_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudNetworkingNetworkV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_network_v2.html#matching_subnet_cidr DataOpentelekomcloudNetworkingNetworkV2#matching_subnet_cidr}
  */
  readonly matchingSubnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_network_v2.html#name DataOpentelekomcloudNetworkingNetworkV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_network_v2.html#network_id DataOpentelekomcloudNetworkingNetworkV2#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_network_v2.html#region DataOpentelekomcloudNetworkingNetworkV2#region}
  */
  readonly region?: string;
  /**
  * The ID of the Tenant (Identity v2) or Project (Identity v3)
to login with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_network_v2.html#tenant_id DataOpentelekomcloudNetworkingNetworkV2#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_network_v2.html opentelekomcloud_networking_network_v2}
*/
export class DataOpentelekomcloudNetworkingNetworkV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_networking_network_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_network_v2.html opentelekomcloud_networking_network_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudNetworkingNetworkV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudNetworkingNetworkV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_network_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._matchingSubnetCidr = config.matchingSubnetCidr;
    this._name = config.name;
    this._networkId = config.networkId;
    this._region = config.region;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: true, optional: false, required: false
  public get adminStateUp() {
    return this.getStringAttribute('admin_state_up');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // matching_subnet_cidr - computed: false, optional: true, required: false
  private _matchingSubnetCidr?: string | undefined; 
  public get matchingSubnetCidr() {
    return this.getStringAttribute('matching_subnet_cidr');
  }
  public set matchingSubnetCidr(value: string | undefined) {
    this._matchingSubnetCidr = value;
  }
  public resetMatchingSubnetCidr() {
    this._matchingSubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingSubnetCidrInput() {
    return this._matchingSubnetCidr
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

  // shared - computed: true, optional: false, required: false
  public get shared() {
    return this.getStringAttribute('shared');
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
      matching_subnet_cidr: cdktf.stringToTerraform(this._matchingSubnetCidr),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }
}
