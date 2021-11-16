// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnaasIkePolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#auth_algorithm VpnaasIkePolicyV2#auth_algorithm}
  */
  readonly authAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#description VpnaasIkePolicyV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#encryption_algorithm VpnaasIkePolicyV2#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#ike_version VpnaasIkePolicyV2#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#name VpnaasIkePolicyV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#pfs VpnaasIkePolicyV2#pfs}
  */
  readonly pfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#phase1_negotiation_mode VpnaasIkePolicyV2#phase1_negotiation_mode}
  */
  readonly phase1NegotiationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#region VpnaasIkePolicyV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#tenant_id VpnaasIkePolicyV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#value_specs VpnaasIkePolicyV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * lifetime block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#lifetime VpnaasIkePolicyV2#lifetime}
  */
  readonly lifetime?: VpnaasIkePolicyV2Lifetime[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#timeouts VpnaasIkePolicyV2#timeouts}
  */
  readonly timeouts?: VpnaasIkePolicyV2Timeouts;
}
export interface VpnaasIkePolicyV2Lifetime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#units VpnaasIkePolicyV2#units}
  */
  readonly units?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#value VpnaasIkePolicyV2#value}
  */
  readonly value?: number;
}

function vpnaasIkePolicyV2LifetimeToTerraform(struct?: VpnaasIkePolicyV2Lifetime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    units: cdktf.stringToTerraform(struct!.units),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface VpnaasIkePolicyV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html#create VpnaasIkePolicyV2#create}
  */
  readonly create?: string;
}

function vpnaasIkePolicyV2TimeoutsToTerraform(struct?: VpnaasIkePolicyV2TimeoutsOutputReference | VpnaasIkePolicyV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class VpnaasIkePolicyV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html opentelekomcloud_vpnaas_ike_policy_v2}
*/
export class VpnaasIkePolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpnaas_ike_policy_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2.html opentelekomcloud_vpnaas_ike_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnaasIkePolicyV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: VpnaasIkePolicyV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpnaas_ike_policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authAlgorithm = config.authAlgorithm;
    this._description = config.description;
    this._encryptionAlgorithm = config.encryptionAlgorithm;
    this._ikeVersion = config.ikeVersion;
    this._name = config.name;
    this._pfs = config.pfs;
    this._phase1NegotiationMode = config.phase1NegotiationMode;
    this._region = config.region;
    this._tenantId = config.tenantId;
    this._valueSpecs = config.valueSpecs;
    this._lifetime = config.lifetime;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_algorithm - computed: false, optional: true, required: false
  private _authAlgorithm?: string | undefined; 
  public get authAlgorithm() {
    return this.getStringAttribute('auth_algorithm');
  }
  public set authAlgorithm(value: string | undefined) {
    this._authAlgorithm = value;
  }
  public resetAuthAlgorithm() {
    this._authAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgorithmInput() {
    return this._authAlgorithm
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

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string | undefined; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string | undefined) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: string | undefined; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string | undefined) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion
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

  // pfs - computed: false, optional: true, required: false
  private _pfs?: string | undefined; 
  public get pfs() {
    return this.getStringAttribute('pfs');
  }
  public set pfs(value: string | undefined) {
    this._pfs = value;
  }
  public resetPfs() {
    this._pfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsInput() {
    return this._pfs
  }

  // phase1_negotiation_mode - computed: false, optional: true, required: false
  private _phase1NegotiationMode?: string | undefined; 
  public get phase1NegotiationMode() {
    return this.getStringAttribute('phase1_negotiation_mode');
  }
  public set phase1NegotiationMode(value: string | undefined) {
    this._phase1NegotiationMode = value;
  }
  public resetPhase1NegotiationMode() {
    this._phase1NegotiationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1NegotiationModeInput() {
    return this._phase1NegotiationMode
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

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: VpnaasIkePolicyV2Lifetime[] | undefined; 
  public get lifetime() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifetime') as any;
  }
  public set lifetime(value: VpnaasIkePolicyV2Lifetime[] | undefined) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpnaasIkePolicyV2Timeouts | undefined; 
  private __timeoutsOutput = new VpnaasIkePolicyV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VpnaasIkePolicyV2Timeouts | undefined) {
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
      auth_algorithm: cdktf.stringToTerraform(this._authAlgorithm),
      description: cdktf.stringToTerraform(this._description),
      encryption_algorithm: cdktf.stringToTerraform(this._encryptionAlgorithm),
      ike_version: cdktf.stringToTerraform(this._ikeVersion),
      name: cdktf.stringToTerraform(this._name),
      pfs: cdktf.stringToTerraform(this._pfs),
      phase1_negotiation_mode: cdktf.stringToTerraform(this._phase1NegotiationMode),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      value_specs: cdktf.hashMapper(cdktf.anyToTerraform)(this._valueSpecs),
      lifetime: cdktf.listMapper(vpnaasIkePolicyV2LifetimeToTerraform)(this._lifetime),
      timeouts: vpnaasIkePolicyV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
