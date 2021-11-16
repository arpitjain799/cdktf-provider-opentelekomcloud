// https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MrsJobV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#arguments MrsJobV1#arguments}
  */
  readonly arguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#cluster_id MrsJobV1#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#hive_script_path MrsJobV1#hive_script_path}
  */
  readonly hiveScriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#input MrsJobV1#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#is_protected MrsJobV1#is_protected}
  */
  readonly isProtected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#is_public MrsJobV1#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#jar_path MrsJobV1#jar_path}
  */
  readonly jarPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#job_log MrsJobV1#job_log}
  */
  readonly jobLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#job_name MrsJobV1#job_name}
  */
  readonly jobName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#job_type MrsJobV1#job_type}
  */
  readonly jobType: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#output MrsJobV1#output}
  */
  readonly output?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#region MrsJobV1#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#timeouts MrsJobV1#timeouts}
  */
  readonly timeouts?: MrsJobV1Timeouts;
}
export interface MrsJobV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#create MrsJobV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#delete MrsJobV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html#update MrsJobV1#update}
  */
  readonly update?: string;
}

function mrsJobV1TimeoutsToTerraform(struct?: MrsJobV1TimeoutsOutputReference | MrsJobV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class MrsJobV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html opentelekomcloud_mrs_job_v1}
*/
export class MrsJobV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_mrs_job_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_job_v1.html opentelekomcloud_mrs_job_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MrsJobV1Config
  */
  public constructor(scope: Construct, id: string, config: MrsJobV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_mrs_job_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arguments = config.arguments;
    this._clusterId = config.clusterId;
    this._hiveScriptPath = config.hiveScriptPath;
    this._input = config.input;
    this._isProtected = config.isProtected;
    this._isPublic = config.isPublic;
    this._jarPath = config.jarPath;
    this._jobLog = config.jobLog;
    this._jobName = config.jobName;
    this._jobType = config.jobType;
    this._output = config.output;
    this._region = config.region;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arguments - computed: true, optional: true, required: false
  private _arguments?: string | undefined; 
  public get arguments() {
    return this.getStringAttribute('arguments');
  }
  public set arguments(value: string | undefined) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId
  }

  // hive_script_path - computed: true, optional: true, required: false
  private _hiveScriptPath?: string | undefined; 
  public get hiveScriptPath() {
    return this.getStringAttribute('hive_script_path');
  }
  public set hiveScriptPath(value: string | undefined) {
    this._hiveScriptPath = value;
  }
  public resetHiveScriptPath() {
    this._hiveScriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveScriptPathInput() {
    return this._hiveScriptPath
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input - computed: true, optional: true, required: false
  private _input?: string | undefined; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string | undefined) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input
  }

  // is_protected - computed: true, optional: true, required: false
  private _isProtected?: boolean | cdktf.IResolvable | undefined; 
  public get isProtected() {
    return this.getBooleanAttribute('is_protected') as any;
  }
  public set isProtected(value: boolean | cdktf.IResolvable | undefined) {
    this._isProtected = value;
  }
  public resetIsProtected() {
    this._isProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProtectedInput() {
    return this._isProtected
  }

  // is_public - computed: true, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable | undefined; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public') as any;
  }
  public set isPublic(value: boolean | cdktf.IResolvable | undefined) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic
  }

  // jar_path - computed: false, optional: false, required: true
  private _jarPath?: string; 
  public get jarPath() {
    return this.getStringAttribute('jar_path');
  }
  public set jarPath(value: string) {
    this._jarPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jarPathInput() {
    return this._jarPath
  }

  // job_log - computed: true, optional: true, required: false
  private _jobLog?: string | undefined; 
  public get jobLog() {
    return this.getStringAttribute('job_log');
  }
  public set jobLog(value: string | undefined) {
    this._jobLog = value;
  }
  public resetJobLog() {
    this._jobLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobLogInput() {
    return this._jobLog
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName
  }

  // job_state - computed: true, optional: false, required: false
  public get jobState() {
    return this.getStringAttribute('job_state');
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: number; 
  public get jobType() {
    return this.getNumberAttribute('job_type');
  }
  public set jobType(value: number) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType
  }

  // output - computed: true, optional: true, required: false
  private _output?: string | undefined; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string | undefined) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MrsJobV1Timeouts | undefined; 
  private __timeoutsOutput = new MrsJobV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MrsJobV1Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arguments: cdktf.stringToTerraform(this._arguments),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      hive_script_path: cdktf.stringToTerraform(this._hiveScriptPath),
      input: cdktf.stringToTerraform(this._input),
      is_protected: cdktf.booleanToTerraform(this._isProtected),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      jar_path: cdktf.stringToTerraform(this._jarPath),
      job_log: cdktf.stringToTerraform(this._jobLog),
      job_name: cdktf.stringToTerraform(this._jobName),
      job_type: cdktf.numberToTerraform(this._jobType),
      output: cdktf.stringToTerraform(this._output),
      region: cdktf.stringToTerraform(this._region),
      timeouts: mrsJobV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
