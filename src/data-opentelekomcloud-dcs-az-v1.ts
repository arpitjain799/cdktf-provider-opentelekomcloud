// https://www.terraform.io/docs/providers/opentelekomcloud/d/dcs_az_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudDcsAzV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dcs_az_v1.html#code DataOpentelekomcloudDcsAzV1#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dcs_az_v1.html#name DataOpentelekomcloudDcsAzV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dcs_az_v1.html#port DataOpentelekomcloudDcsAzV1#port}
  */
  readonly port?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dcs_az_v1.html opentelekomcloud_dcs_az_v1}
*/
export class DataOpentelekomcloudDcsAzV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_dcs_az_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dcs_az_v1.html opentelekomcloud_dcs_az_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudDcsAzV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudDcsAzV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dcs_az_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._code = config.code;
    this._name = config.name;
    this._port = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // code - computed: true, optional: true, required: false
  private _code?: string | undefined; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string | undefined) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // port - computed: true, optional: true, required: false
  private _port?: string | undefined; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code: cdktf.stringToTerraform(this._code),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.stringToTerraform(this._port),
    };
  }
}
