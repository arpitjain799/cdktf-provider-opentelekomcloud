// https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_route_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudVpcRouteV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_route_v2.html#destination DataOpentelekomcloudVpcRouteV2#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_route_v2.html#id DataOpentelekomcloudVpcRouteV2#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_route_v2.html#nexthop DataOpentelekomcloudVpcRouteV2#nexthop}
  */
  readonly nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_route_v2.html#region DataOpentelekomcloudVpcRouteV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_route_v2.html#tenant_id DataOpentelekomcloudVpcRouteV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_route_v2.html#type DataOpentelekomcloudVpcRouteV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_route_v2.html#vpc_id DataOpentelekomcloudVpcRouteV2#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_route_v2.html opentelekomcloud_vpc_route_v2}
*/
export class DataOpentelekomcloudVpcRouteV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpc_route_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_route_v2.html opentelekomcloud_vpc_route_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudVpcRouteV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudVpcRouteV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_route_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destination = config.destination;
    this._id = config.id;
    this._nexthop = config.nexthop;
    this._region = config.region;
    this._tenantId = config.tenantId;
    this._type = config.type;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination - computed: false, optional: true, required: false
  private _destination?: string | undefined; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string | undefined) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop?: string | undefined; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string | undefined) {
    this._nexthop = value;
  }
  public resetNexthop() {
    this._nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop
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

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string | undefined; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: cdktf.stringToTerraform(this._destination),
      id: cdktf.stringToTerraform(this._id),
      nexthop: cdktf.stringToTerraform(this._nexthop),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      type: cdktf.stringToTerraform(this._type),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
