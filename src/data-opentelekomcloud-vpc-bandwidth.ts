// https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_bandwidth.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudVpcBandwidthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_bandwidth.html#enterprise_project_id DataOpentelekomcloudVpcBandwidth#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_bandwidth.html#name DataOpentelekomcloudVpcBandwidth#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_bandwidth.html#region DataOpentelekomcloudVpcBandwidth#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_bandwidth.html#size DataOpentelekomcloudVpcBandwidth#size}
  */
  readonly size?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_bandwidth.html opentelekomcloud_vpc_bandwidth}
*/
export class DataOpentelekomcloudVpcBandwidth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpc_bandwidth";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_bandwidth.html opentelekomcloud_vpc_bandwidth} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudVpcBandwidthConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudVpcBandwidthConfig) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_bandwidth',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._name = config.name;
    this._region = config.region;
    this._size = config.size;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_type - computed: true, optional: false, required: false
  public get bandwidthType() {
    return this.getStringAttribute('bandwidth_type');
  }

  // charge_mode - computed: true, optional: false, required: false
  public get chargeMode() {
    return this.getStringAttribute('charge_mode');
  }

  // enterprise_project_id - computed: false, optional: true, required: false
  private _enterpriseProjectId?: string | undefined; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string | undefined) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // share_type - computed: true, optional: false, required: false
  public get shareType() {
    return this.getStringAttribute('share_type');
  }

  // size - computed: false, optional: true, required: false
  private _size?: number | undefined; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number | undefined) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      size: cdktf.numberToTerraform(this._size),
    };
  }
}
