// https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafAlarmNotificationV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1.html#enabled WafAlarmNotificationV1#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1.html#locale WafAlarmNotificationV1#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1.html#send_frequency WafAlarmNotificationV1#send_frequency}
  */
  readonly sendFrequency: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1.html#threat WafAlarmNotificationV1#threat}
  */
  readonly threat: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1.html#times WafAlarmNotificationV1#times}
  */
  readonly times: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1.html#topic_urn WafAlarmNotificationV1#topic_urn}
  */
  readonly topicUrn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1.html opentelekomcloud_waf_alarm_notification_v1}
*/
export class WafAlarmNotificationV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_waf_alarm_notification_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1.html opentelekomcloud_waf_alarm_notification_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafAlarmNotificationV1Config
  */
  public constructor(scope: Construct, id: string, config: WafAlarmNotificationV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_alarm_notification_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._locale = config.locale;
    this._sendFrequency = config.sendFrequency;
    this._threat = config.threat;
    this._times = config.times;
    this._topicUrn = config.topicUrn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string | undefined; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string | undefined) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale
  }

  // send_frequency - computed: false, optional: false, required: true
  private _sendFrequency?: number; 
  public get sendFrequency() {
    return this.getNumberAttribute('send_frequency');
  }
  public set sendFrequency(value: number) {
    this._sendFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendFrequencyInput() {
    return this._sendFrequency
  }

  // threat - computed: false, optional: false, required: true
  private _threat?: string[]; 
  public get threat() {
    return this.getListAttribute('threat');
  }
  public set threat(value: string[]) {
    this._threat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatInput() {
    return this._threat
  }

  // times - computed: false, optional: false, required: true
  private _times?: number; 
  public get times() {
    return this.getNumberAttribute('times');
  }
  public set times(value: number) {
    this._times = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      locale: cdktf.stringToTerraform(this._locale),
      send_frequency: cdktf.numberToTerraform(this._sendFrequency),
      threat: cdktf.listMapper(cdktf.stringToTerraform)(this._threat),
      times: cdktf.numberToTerraform(this._times),
      topic_urn: cdktf.stringToTerraform(this._topicUrn),
    };
  }
}
