// https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafCcattackprotectionRuleV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#action_category WafCcattackprotectionRuleV1#action_category}
  */
  readonly actionCategory: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#block_content WafCcattackprotectionRuleV1#block_content}
  */
  readonly blockContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#block_content_type WafCcattackprotectionRuleV1#block_content_type}
  */
  readonly blockContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#limit_num WafCcattackprotectionRuleV1#limit_num}
  */
  readonly limitNum: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#limit_period WafCcattackprotectionRuleV1#limit_period}
  */
  readonly limitPeriod: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#lock_time WafCcattackprotectionRuleV1#lock_time}
  */
  readonly lockTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#policy_id WafCcattackprotectionRuleV1#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#tag_category WafCcattackprotectionRuleV1#tag_category}
  */
  readonly tagCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#tag_contents WafCcattackprotectionRuleV1#tag_contents}
  */
  readonly tagContents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#tag_index WafCcattackprotectionRuleV1#tag_index}
  */
  readonly tagIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#tag_type WafCcattackprotectionRuleV1#tag_type}
  */
  readonly tagType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#url WafCcattackprotectionRuleV1#url}
  */
  readonly url: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#timeouts WafCcattackprotectionRuleV1#timeouts}
  */
  readonly timeouts?: WafCcattackprotectionRuleV1Timeouts;
}
export interface WafCcattackprotectionRuleV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#create WafCcattackprotectionRuleV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html#delete WafCcattackprotectionRuleV1#delete}
  */
  readonly delete?: string;
}

function wafCcattackprotectionRuleV1TimeoutsToTerraform(struct?: WafCcattackprotectionRuleV1TimeoutsOutputReference | WafCcattackprotectionRuleV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class WafCcattackprotectionRuleV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html opentelekomcloud_waf_ccattackprotection_rule_v1}
*/
export class WafCcattackprotectionRuleV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_waf_ccattackprotection_rule_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_ccattackprotection_rule_v1.html opentelekomcloud_waf_ccattackprotection_rule_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafCcattackprotectionRuleV1Config
  */
  public constructor(scope: Construct, id: string, config: WafCcattackprotectionRuleV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_ccattackprotection_rule_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actionCategory = config.actionCategory;
    this._blockContent = config.blockContent;
    this._blockContentType = config.blockContentType;
    this._limitNum = config.limitNum;
    this._limitPeriod = config.limitPeriod;
    this._lockTime = config.lockTime;
    this._policyId = config.policyId;
    this._tagCategory = config.tagCategory;
    this._tagContents = config.tagContents;
    this._tagIndex = config.tagIndex;
    this._tagType = config.tagType;
    this._url = config.url;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_category - computed: false, optional: false, required: true
  private _actionCategory?: string; 
  public get actionCategory() {
    return this.getStringAttribute('action_category');
  }
  public set actionCategory(value: string) {
    this._actionCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCategoryInput() {
    return this._actionCategory
  }

  // block_content - computed: false, optional: true, required: false
  private _blockContent?: string | undefined; 
  public get blockContent() {
    return this.getStringAttribute('block_content');
  }
  public set blockContent(value: string | undefined) {
    this._blockContent = value;
  }
  public resetBlockContent() {
    this._blockContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockContentInput() {
    return this._blockContent
  }

  // block_content_type - computed: false, optional: true, required: false
  private _blockContentType?: string | undefined; 
  public get blockContentType() {
    return this.getStringAttribute('block_content_type');
  }
  public set blockContentType(value: string | undefined) {
    this._blockContentType = value;
  }
  public resetBlockContentType() {
    this._blockContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockContentTypeInput() {
    return this._blockContentType
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // limit_num - computed: false, optional: false, required: true
  private _limitNum?: number; 
  public get limitNum() {
    return this.getNumberAttribute('limit_num');
  }
  public set limitNum(value: number) {
    this._limitNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitNumInput() {
    return this._limitNum
  }

  // limit_period - computed: false, optional: false, required: true
  private _limitPeriod?: number; 
  public get limitPeriod() {
    return this.getNumberAttribute('limit_period');
  }
  public set limitPeriod(value: number) {
    this._limitPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitPeriodInput() {
    return this._limitPeriod
  }

  // lock_time - computed: false, optional: true, required: false
  private _lockTime?: number | undefined; 
  public get lockTime() {
    return this.getNumberAttribute('lock_time');
  }
  public set lockTime(value: number | undefined) {
    this._lockTime = value;
  }
  public resetLockTime() {
    this._lockTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockTimeInput() {
    return this._lockTime
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId
  }

  // tag_category - computed: false, optional: true, required: false
  private _tagCategory?: string | undefined; 
  public get tagCategory() {
    return this.getStringAttribute('tag_category');
  }
  public set tagCategory(value: string | undefined) {
    this._tagCategory = value;
  }
  public resetTagCategory() {
    this._tagCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagCategoryInput() {
    return this._tagCategory
  }

  // tag_contents - computed: false, optional: true, required: false
  private _tagContents?: string[] | undefined; 
  public get tagContents() {
    return this.getListAttribute('tag_contents');
  }
  public set tagContents(value: string[] | undefined) {
    this._tagContents = value;
  }
  public resetTagContents() {
    this._tagContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagContentsInput() {
    return this._tagContents
  }

  // tag_index - computed: false, optional: true, required: false
  private _tagIndex?: string | undefined; 
  public get tagIndex() {
    return this.getStringAttribute('tag_index');
  }
  public set tagIndex(value: string | undefined) {
    this._tagIndex = value;
  }
  public resetTagIndex() {
    this._tagIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIndexInput() {
    return this._tagIndex
  }

  // tag_type - computed: false, optional: false, required: true
  private _tagType?: string; 
  public get tagType() {
    return this.getStringAttribute('tag_type');
  }
  public set tagType(value: string) {
    this._tagType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTypeInput() {
    return this._tagType
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WafCcattackprotectionRuleV1Timeouts | undefined; 
  private __timeoutsOutput = new WafCcattackprotectionRuleV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: WafCcattackprotectionRuleV1Timeouts | undefined) {
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
      action_category: cdktf.stringToTerraform(this._actionCategory),
      block_content: cdktf.stringToTerraform(this._blockContent),
      block_content_type: cdktf.stringToTerraform(this._blockContentType),
      limit_num: cdktf.numberToTerraform(this._limitNum),
      limit_period: cdktf.numberToTerraform(this._limitPeriod),
      lock_time: cdktf.numberToTerraform(this._lockTime),
      policy_id: cdktf.stringToTerraform(this._policyId),
      tag_category: cdktf.stringToTerraform(this._tagCategory),
      tag_contents: cdktf.listMapper(cdktf.stringToTerraform)(this._tagContents),
      tag_index: cdktf.stringToTerraform(this._tagIndex),
      tag_type: cdktf.stringToTerraform(this._tagType),
      url: cdktf.stringToTerraform(this._url),
      timeouts: wafCcattackprotectionRuleV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
