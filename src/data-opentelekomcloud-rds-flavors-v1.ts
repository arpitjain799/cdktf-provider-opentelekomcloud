// https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudRdsFlavorsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v1.html#datastore_name DataOpentelekomcloudRdsFlavorsV1#datastore_name}
  */
  readonly datastoreName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v1.html#datastore_version DataOpentelekomcloudRdsFlavorsV1#datastore_version}
  */
  readonly datastoreVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v1.html#region DataOpentelekomcloudRdsFlavorsV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v1.html#speccode DataOpentelekomcloudRdsFlavorsV1#speccode}
  */
  readonly speccode?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v1.html opentelekomcloud_rds_flavors_v1}
*/
export class DataOpentelekomcloudRdsFlavorsV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_rds_flavors_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v1.html opentelekomcloud_rds_flavors_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudRdsFlavorsV1Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudRdsFlavorsV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rds_flavors_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._datastoreName = config.datastoreName;
    this._datastoreVersion = config.datastoreVersion;
    this._region = config.region;
    this._speccode = config.speccode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datastore_name - computed: false, optional: false, required: true
  private _datastoreName?: string; 
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName
  }

  // datastore_version - computed: false, optional: false, required: true
  private _datastoreVersion?: string; 
  public get datastoreVersion() {
    return this.getStringAttribute('datastore_version');
  }
  public set datastoreVersion(value: string) {
    this._datastoreVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreVersionInput() {
    return this._datastoreVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
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

  // speccode - computed: true, optional: true, required: false
  private _speccode?: string | undefined; 
  public get speccode() {
    return this.getStringAttribute('speccode');
  }
  public set speccode(value: string | undefined) {
    this._speccode = value;
  }
  public resetSpeccode() {
    this._speccode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speccodeInput() {
    return this._speccode
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datastore_name: cdktf.stringToTerraform(this._datastoreName),
      datastore_version: cdktf.stringToTerraform(this._datastoreVersion),
      region: cdktf.stringToTerraform(this._region),
      speccode: cdktf.stringToTerraform(this._speccode),
    };
  }
}
