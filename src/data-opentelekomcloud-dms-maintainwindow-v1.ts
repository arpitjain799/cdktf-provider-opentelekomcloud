// https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudDmsMaintainwindowV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1.html#begin DataOpentelekomcloudDmsMaintainwindowV1#begin}
  */
  readonly begin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1.html#default DataOpentelekomcloudDmsMaintainwindowV1#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1.html#end DataOpentelekomcloudDmsMaintainwindowV1#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1.html#seq DataOpentelekomcloudDmsMaintainwindowV1#seq}
  */
  readonly seq?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1.html opentelekomcloud_dms_maintainwindow_v1}
*/
export class DataOpentelekomcloudDmsMaintainwindowV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_dms_maintainwindow_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1.html opentelekomcloud_dms_maintainwindow_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudDmsMaintainwindowV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudDmsMaintainwindowV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dms_maintainwindow_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._begin = config.begin;
    this._default = config.default;
    this._end = config.end;
    this._seq = config.seq;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // begin - computed: true, optional: true, required: false
  private _begin?: string | undefined; 
  public get begin() {
    return this.getStringAttribute('begin');
  }
  public set begin(value: string | undefined) {
    this._begin = value;
  }
  public resetBegin() {
    this._begin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin
  }

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable | undefined; 
  public get default() {
    return this.getBooleanAttribute('default') as any;
  }
  public set default(value: boolean | cdktf.IResolvable | undefined) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default
  }

  // end - computed: true, optional: true, required: false
  private _end?: string | undefined; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string | undefined) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // seq - computed: true, optional: true, required: false
  private _seq?: number | undefined; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number | undefined) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      begin: cdktf.stringToTerraform(this._begin),
      default: cdktf.booleanToTerraform(this._default),
      end: cdktf.stringToTerraform(this._end),
      seq: cdktf.numberToTerraform(this._seq),
    };
  }
}
