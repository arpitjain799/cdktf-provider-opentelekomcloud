// https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_protocol_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityProtocolV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_protocol_v3.html#mapping_id IdentityProtocolV3#mapping_id}
  */
  readonly mappingId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_protocol_v3.html#protocol IdentityProtocolV3#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_protocol_v3.html#provider_id IdentityProtocolV3#provider_id}
  */
  readonly providerId: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_protocol_v3.html#metadata IdentityProtocolV3#metadata}
  */
  readonly metadata?: IdentityProtocolV3Metadata;
}
export interface IdentityProtocolV3Metadata {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_protocol_v3.html#domain_id IdentityProtocolV3#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_protocol_v3.html#metadata IdentityProtocolV3#metadata}
  */
  readonly metadata: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_protocol_v3.html#xaccount_type IdentityProtocolV3#xaccount_type}
  */
  readonly xaccountType?: string;
}

function identityProtocolV3MetadataToTerraform(struct?: IdentityProtocolV3MetadataOutputReference | IdentityProtocolV3Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    xaccount_type: cdktf.stringToTerraform(struct!.xaccountType),
  }
}

export class IdentityProtocolV3MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // xaccount_type - computed: false, optional: true, required: false
  private _xaccountType?: string | undefined; 
  public get xaccountType() {
    return this.getStringAttribute('xaccount_type');
  }
  public set xaccountType(value: string | undefined) {
    this._xaccountType = value;
  }
  public resetXaccountType() {
    this._xaccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xaccountTypeInput() {
    return this._xaccountType
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_protocol_v3.html opentelekomcloud_identity_protocol_v3}
*/
export class IdentityProtocolV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_identity_protocol_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_protocol_v3.html opentelekomcloud_identity_protocol_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityProtocolV3Config
  */
  public constructor(scope: Construct, id: string, config: IdentityProtocolV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_protocol_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._mappingId = config.mappingId;
    this._protocol = config.protocol;
    this._providerId = config.providerId;
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  public links(key: string): string {
    return new cdktf.StringMap(this, 'links').lookup(key);
  }

  // mapping_id - computed: false, optional: false, required: true
  private _mappingId?: string; 
  public get mappingId() {
    return this.getStringAttribute('mapping_id');
  }
  public set mappingId(value: string) {
    this._mappingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingIdInput() {
    return this._mappingId
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: IdentityProtocolV3Metadata | undefined; 
  private __metadataOutput = new IdentityProtocolV3MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: IdentityProtocolV3Metadata | undefined) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mapping_id: cdktf.stringToTerraform(this._mappingId),
      protocol: cdktf.stringToTerraform(this._protocol),
      provider_id: cdktf.stringToTerraform(this._providerId),
      metadata: identityProtocolV3MetadataToTerraform(this._metadata),
    };
  }
}
