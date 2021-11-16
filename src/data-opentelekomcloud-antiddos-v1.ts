// https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudAntiddosV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1.html#floating_ip_address DataOpentelekomcloudAntiddosV1#floating_ip_address}
  */
  readonly floatingIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1.html#floating_ip_id DataOpentelekomcloudAntiddosV1#floating_ip_id}
  */
  readonly floatingIpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1.html#region DataOpentelekomcloudAntiddosV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1.html#status DataOpentelekomcloudAntiddosV1#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1.html opentelekomcloud_antiddos_v1}
*/
export class DataOpentelekomcloudAntiddosV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_antiddos_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1.html opentelekomcloud_antiddos_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudAntiddosV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudAntiddosV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_antiddos_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._floatingIpAddress = config.floatingIpAddress;
    this._floatingIpId = config.floatingIpId;
    this._region = config.region;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bps_attack - computed: true, optional: false, required: false
  public get bpsAttack() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('bps_attack') as any;
  }

  // bps_in - computed: true, optional: false, required: false
  public get bpsIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('bps_in') as any;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('end_time') as any;
  }

  // floating_ip_address - computed: true, optional: true, required: false
  private _floatingIpAddress?: string | undefined; 
  public get floatingIpAddress() {
    return this.getStringAttribute('floating_ip_address');
  }
  public set floatingIpAddress(value: string | undefined) {
    this._floatingIpAddress = value;
  }
  public resetFloatingIpAddress() {
    this._floatingIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpAddressInput() {
    return this._floatingIpAddress
  }

  // floating_ip_id - computed: true, optional: true, required: false
  private _floatingIpId?: string | undefined; 
  public get floatingIpId() {
    return this.getStringAttribute('floating_ip_id');
  }
  public set floatingIpId(value: string | undefined) {
    this._floatingIpId = value;
  }
  public resetFloatingIpId() {
    this._floatingIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpIdInput() {
    return this._floatingIpId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // period_start - computed: true, optional: false, required: false
  public get periodStart() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('period_start') as any;
  }

  // pps_attack - computed: true, optional: false, required: false
  public get ppsAttack() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pps_attack') as any;
  }

  // pps_in - computed: true, optional: false, required: false
  public get ppsIn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pps_in') as any;
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

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('start_time') as any;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string | undefined; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // total_bps - computed: true, optional: false, required: false
  public get totalBps() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('total_bps') as any;
  }

  // total_pps - computed: true, optional: false, required: false
  public get totalPps() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('total_pps') as any;
  }

  // traffic_cleaning_status - computed: true, optional: false, required: false
  public get trafficCleaningStatus() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('traffic_cleaning_status') as any;
  }

  // trigger_bps - computed: true, optional: false, required: false
  public get triggerBps() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('trigger_bps') as any;
  }

  // trigger_http_pps - computed: true, optional: false, required: false
  public get triggerHttpPps() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('trigger_http_pps') as any;
  }

  // trigger_pps - computed: true, optional: false, required: false
  public get triggerPps() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('trigger_pps') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      floating_ip_address: cdktf.stringToTerraform(this._floatingIpAddress),
      floating_ip_id: cdktf.stringToTerraform(this._floatingIpId),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
