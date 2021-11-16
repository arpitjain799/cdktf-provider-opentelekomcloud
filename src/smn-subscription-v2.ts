// https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmnSubscriptionV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2.html#endpoint SmnSubscriptionV2#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2.html#project_name SmnSubscriptionV2#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2.html#protocol SmnSubscriptionV2#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2.html#remark SmnSubscriptionV2#remark}
  */
  readonly remark?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2.html#topic_urn SmnSubscriptionV2#topic_urn}
  */
  readonly topicUrn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2.html opentelekomcloud_smn_subscription_v2}
*/
export class SmnSubscriptionV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_smn_subscription_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2.html opentelekomcloud_smn_subscription_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmnSubscriptionV2Config
  */
  public constructor(scope: Construct, id: string, config: SmnSubscriptionV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_smn_subscription_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endpoint = config.endpoint;
    this._projectName = config.projectName;
    this._protocol = config.protocol;
    this._remark = config.remark;
    this._topicUrn = config.topicUrn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string | undefined; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string | undefined) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName
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

  // remark - computed: false, optional: true, required: false
  private _remark?: string | undefined; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string | undefined) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // subscription_urn - computed: true, optional: false, required: false
  public get subscriptionUrn() {
    return this.getStringAttribute('subscription_urn');
  }

  // topic_urn - computed: false, optional: false, required: true
  private _topicUrn?: string; 
  public get topicUrn() {
    return this.getStringAttribute('topic_urn');
  }
  public set topicUrn(value: string) {
    this._topicUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicUrnInput() {
    return this._topicUrn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      project_name: cdktf.stringToTerraform(this._projectName),
      protocol: cdktf.stringToTerraform(this._protocol),
      remark: cdktf.stringToTerraform(this._remark),
      topic_urn: cdktf.stringToTerraform(this._topicUrn),
    };
  }
}
