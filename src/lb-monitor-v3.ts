// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbMonitorV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#admin_state_up LbMonitorV3#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#delay LbMonitorV3#delay}
  */
  readonly delay: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#domain_name LbMonitorV3#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#expected_codes LbMonitorV3#expected_codes}
  */
  readonly expectedCodes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#http_method LbMonitorV3#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#max_retries LbMonitorV3#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#max_retries_down LbMonitorV3#max_retries_down}
  */
  readonly maxRetriesDown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#monitor_port LbMonitorV3#monitor_port}
  */
  readonly monitorPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#name LbMonitorV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#pool_id LbMonitorV3#pool_id}
  */
  readonly poolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#project_id LbMonitorV3#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#timeout LbMonitorV3#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#type LbMonitorV3#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html#url_path LbMonitorV3#url_path}
  */
  readonly urlPath?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html opentelekomcloud_lb_monitor_v3}
*/
export class LbMonitorV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_monitor_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3.html opentelekomcloud_lb_monitor_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbMonitorV3Config
  */
  public constructor(scope: Construct, id: string, config: LbMonitorV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_monitor_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminStateUp = config.adminStateUp;
    this._delay = config.delay;
    this._domainName = config.domainName;
    this._expectedCodes = config.expectedCodes;
    this._httpMethod = config.httpMethod;
    this._maxRetries = config.maxRetries;
    this._maxRetriesDown = config.maxRetriesDown;
    this._monitorPort = config.monitorPort;
    this._name = config.name;
    this._poolId = config.poolId;
    this._projectId = config.projectId;
    this._timeout = config.timeout;
    this._type = config.type;
    this._urlPath = config.urlPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable | undefined; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up') as any;
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable | undefined) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp
  }

  // delay - computed: false, optional: false, required: true
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string | undefined; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string | undefined) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // expected_codes - computed: true, optional: true, required: false
  private _expectedCodes?: string | undefined; 
  public get expectedCodes() {
    return this.getStringAttribute('expected_codes');
  }
  public set expectedCodes(value: string | undefined) {
    this._expectedCodes = value;
  }
  public resetExpectedCodes() {
    this._expectedCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedCodesInput() {
    return this._expectedCodes
  }

  // http_method - computed: true, optional: true, required: false
  private _httpMethod?: string | undefined; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string | undefined) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries
  }

  // max_retries_down - computed: true, optional: true, required: false
  private _maxRetriesDown?: number | undefined; 
  public get maxRetriesDown() {
    return this.getNumberAttribute('max_retries_down');
  }
  public set maxRetriesDown(value: number | undefined) {
    this._maxRetriesDown = value;
  }
  public resetMaxRetriesDown() {
    this._maxRetriesDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesDownInput() {
    return this._maxRetriesDown
  }

  // monitor_port - computed: true, optional: true, required: false
  private _monitorPort?: number | undefined; 
  public get monitorPort() {
    return this.getNumberAttribute('monitor_port');
  }
  public set monitorPort(value: number | undefined) {
    this._monitorPort = value;
  }
  public resetMonitorPort() {
    this._monitorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPortInput() {
    return this._monitorPort
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

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string | undefined; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
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

  // url_path - computed: true, optional: true, required: false
  private _urlPath?: string | undefined; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string | undefined) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      delay: cdktf.numberToTerraform(this._delay),
      domain_name: cdktf.stringToTerraform(this._domainName),
      expected_codes: cdktf.stringToTerraform(this._expectedCodes),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      max_retries_down: cdktf.numberToTerraform(this._maxRetriesDown),
      monitor_port: cdktf.numberToTerraform(this._monitorPort),
      name: cdktf.stringToTerraform(this._name),
      pool_id: cdktf.stringToTerraform(this._poolId),
      project_id: cdktf.stringToTerraform(this._projectId),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      url_path: cdktf.stringToTerraform(this._urlPath),
    };
  }
}
