// https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_parametergroup_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsParametergroupV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_parametergroup_v3.html#description RdsParametergroupV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_parametergroup_v3.html#name RdsParametergroupV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_parametergroup_v3.html#values RdsParametergroupV3#values}
  */
  readonly values?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * datastore block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_parametergroup_v3.html#datastore RdsParametergroupV3#datastore}
  */
  readonly datastore: RdsParametergroupV3Datastore;
}
export class RdsParametergroupV3ConfigurationParameters extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly') as any;
  }

  // restart_required - computed: true, optional: false, required: false
  public get restartRequired() {
    return this.getBooleanAttribute('restart_required') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_range - computed: true, optional: false, required: false
  public get valueRange() {
    return this.getStringAttribute('value_range');
  }
}
export interface RdsParametergroupV3Datastore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_parametergroup_v3.html#type RdsParametergroupV3#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_parametergroup_v3.html#version RdsParametergroupV3#version}
  */
  readonly version: string;
}

function rdsParametergroupV3DatastoreToTerraform(struct?: RdsParametergroupV3DatastoreOutputReference | RdsParametergroupV3Datastore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class RdsParametergroupV3DatastoreOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_parametergroup_v3.html opentelekomcloud_rds_parametergroup_v3}
*/
export class RdsParametergroupV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_rds_parametergroup_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_parametergroup_v3.html opentelekomcloud_rds_parametergroup_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsParametergroupV3Config
  */
  public constructor(scope: Construct, id: string, config: RdsParametergroupV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rds_parametergroup_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._values = config.values;
    this._datastore = config.datastore;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_parameters - computed: true, optional: false, required: false
  public configurationParameters(index: string) {
    return new RdsParametergroupV3ConfigurationParameters(this, 'configuration_parameters', index);
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get values() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('values') as any;
  }
  public set values(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }

  // datastore - computed: false, optional: false, required: true
  private _datastore?: RdsParametergroupV3Datastore; 
  private __datastoreOutput = new RdsParametergroupV3DatastoreOutputReference(this as any, "datastore", true);
  public get datastore() {
    return this.__datastoreOutput;
  }
  public putDatastore(value: RdsParametergroupV3Datastore) {
    this._datastore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      values: cdktf.hashMapper(cdktf.anyToTerraform)(this._values),
      datastore: rdsParametergroupV3DatastoreToTerraform(this._datastore),
    };
  }
}
