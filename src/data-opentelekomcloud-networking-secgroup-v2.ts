// https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_secgroup_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudNetworkingSecgroupV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_secgroup_v2.html#name DataOpentelekomcloudNetworkingSecgroupV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_secgroup_v2.html#region DataOpentelekomcloudNetworkingSecgroupV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_secgroup_v2.html#secgroup_id DataOpentelekomcloudNetworkingSecgroupV2#secgroup_id}
  */
  readonly secgroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_secgroup_v2.html#tenant_id DataOpentelekomcloudNetworkingSecgroupV2#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_secgroup_v2.html opentelekomcloud_networking_secgroup_v2}
*/
export class DataOpentelekomcloudNetworkingSecgroupV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_networking_secgroup_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_secgroup_v2.html opentelekomcloud_networking_secgroup_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudNetworkingSecgroupV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudNetworkingSecgroupV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_secgroup_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._region = config.region;
    this._secgroupId = config.secgroupId;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // secgroup_id - computed: false, optional: true, required: false
  private _secgroupId?: string | undefined; 
  public get secgroupId() {
    return this.getStringAttribute('secgroup_id');
  }
  public set secgroupId(value: string | undefined) {
    this._secgroupId = value;
  }
  public resetSecgroupId() {
    this._secgroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secgroupIdInput() {
    return this._secgroupId
  }

  // tenant_id - computed: true, optional: true, required: false
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
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      secgroup_id: cdktf.stringToTerraform(this._secgroupId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }
}
