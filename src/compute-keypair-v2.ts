// https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_keypair_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeKeypairV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_keypair_v2.html#name ComputeKeypairV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_keypair_v2.html#public_key ComputeKeypairV2#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_keypair_v2.html#region ComputeKeypairV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_keypair_v2.html#value_specs ComputeKeypairV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_keypair_v2.html opentelekomcloud_compute_keypair_v2}
*/
export class ComputeKeypairV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_compute_keypair_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_keypair_v2.html opentelekomcloud_compute_keypair_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeKeypairV2Config
  */
  public constructor(scope: Construct, id: string, config: ComputeKeypairV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_compute_keypair_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._publicKey = config.publicKey;
    this._region = config.region;
    this._valueSpecs = config.valueSpecs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string | undefined; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string | undefined) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey
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
    return this.getBooleanAttribute('shared') as any;
  }

  // value_specs - computed: false, optional: true, required: false
  private _valueSpecs?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get valueSpecs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('value_specs') as any;
  }
  public set valueSpecs(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._valueSpecs = value;
  }
  public resetValueSpecs() {
    this._valueSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSpecsInput() {
    return this._valueSpecs
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      public_key: cdktf.stringToTerraform(this._publicKey),
      region: cdktf.stringToTerraform(this._region),
      value_specs: cdktf.hashMapper(cdktf.anyToTerraform)(this._valueSpecs),
    };
  }
}
