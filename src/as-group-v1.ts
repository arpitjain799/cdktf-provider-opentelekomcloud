// https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsGroupV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#available_zones AsGroupV1#available_zones}
  */
  readonly availableZones?: string[];
  /**
  * The cooling duration, in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#cool_down_time AsGroupV1#cool_down_time}
  */
  readonly coolDownTime?: number;
  /**
  * Whether to delete instances when they are removed from the AS group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#delete_instances AsGroupV1#delete_instances}
  */
  readonly deleteInstances?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#delete_publicip AsGroupV1#delete_publicip}
  */
  readonly deletePublicip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#desire_instance_number AsGroupV1#desire_instance_number}
  */
  readonly desireInstanceNumber?: number;
  /**
  * The grace period for instance health check, in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#health_periodic_audit_grace_period AsGroupV1#health_periodic_audit_grace_period}
  */
  readonly healthPeriodicAuditGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}
  */
  readonly healthPeriodicAuditMethod?: string;
  /**
  * The health check period for instances, in minutes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#health_periodic_audit_time AsGroupV1#health_periodic_audit_time}
  */
  readonly healthPeriodicAuditTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#instance_terminate_policy AsGroupV1#instance_terminate_policy}
  */
  readonly instanceTerminatePolicy?: string;
  /**
  * The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#lb_listener_id AsGroupV1#lb_listener_id}
  */
  readonly lbListenerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#max_instance_number AsGroupV1#max_instance_number}
  */
  readonly maxInstanceNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#min_instance_number AsGroupV1#min_instance_number}
  */
  readonly minInstanceNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#notifications AsGroupV1#notifications}
  */
  readonly notifications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#region AsGroupV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#scaling_configuration_id AsGroupV1#scaling_configuration_id}
  */
  readonly scalingConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#scaling_group_name AsGroupV1#scaling_group_name}
  */
  readonly scalingGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#tags AsGroupV1#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#vpc_id AsGroupV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * lbaas_listeners block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#lbaas_listeners AsGroupV1#lbaas_listeners}
  */
  readonly lbaasListeners?: AsGroupV1LbaasListeners[];
  /**
  * networks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#networks AsGroupV1#networks}
  */
  readonly networks: AsGroupV1Networks[];
  /**
  * security_groups block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#security_groups AsGroupV1#security_groups}
  */
  readonly securityGroups?: AsGroupV1SecurityGroups;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#timeouts AsGroupV1#timeouts}
  */
  readonly timeouts?: AsGroupV1Timeouts;
}
export interface AsGroupV1LbaasListeners {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#pool_id AsGroupV1#pool_id}
  */
  readonly poolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#protocol_port AsGroupV1#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#weight AsGroupV1#weight}
  */
  readonly weight?: number;
}

function asGroupV1LbaasListenersToTerraform(struct?: AsGroupV1LbaasListeners): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_id: cdktf.stringToTerraform(struct!.poolId),
    protocol_port: cdktf.numberToTerraform(struct!.protocolPort),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface AsGroupV1Networks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#id AsGroupV1#id}
  */
  readonly id: string;
}

function asGroupV1NetworksToTerraform(struct?: AsGroupV1Networks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface AsGroupV1SecurityGroups {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#id AsGroupV1#id}
  */
  readonly id: string;
}

function asGroupV1SecurityGroupsToTerraform(struct?: AsGroupV1SecurityGroupsOutputReference | AsGroupV1SecurityGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class AsGroupV1SecurityGroupsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }
}
export interface AsGroupV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#create AsGroupV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html#delete AsGroupV1#delete}
  */
  readonly delete?: string;
}

function asGroupV1TimeoutsToTerraform(struct?: AsGroupV1TimeoutsOutputReference | AsGroupV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class AsGroupV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html opentelekomcloud_as_group_v1}
*/
export class AsGroupV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_as_group_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1.html opentelekomcloud_as_group_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsGroupV1Config
  */
  public constructor(scope: Construct, id: string, config: AsGroupV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_as_group_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availableZones = config.availableZones;
    this._coolDownTime = config.coolDownTime;
    this._deleteInstances = config.deleteInstances;
    this._deletePublicip = config.deletePublicip;
    this._desireInstanceNumber = config.desireInstanceNumber;
    this._healthPeriodicAuditGracePeriod = config.healthPeriodicAuditGracePeriod;
    this._healthPeriodicAuditMethod = config.healthPeriodicAuditMethod;
    this._healthPeriodicAuditTime = config.healthPeriodicAuditTime;
    this._instanceTerminatePolicy = config.instanceTerminatePolicy;
    this._lbListenerId = config.lbListenerId;
    this._maxInstanceNumber = config.maxInstanceNumber;
    this._minInstanceNumber = config.minInstanceNumber;
    this._notifications = config.notifications;
    this._region = config.region;
    this._scalingConfigurationId = config.scalingConfigurationId;
    this._scalingGroupName = config.scalingGroupName;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._lbaasListeners = config.lbaasListeners;
    this._networks = config.networks;
    this._securityGroups = config.securityGroups;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_zones - computed: false, optional: true, required: false
  private _availableZones?: string[] | undefined; 
  public get availableZones() {
    return this.getListAttribute('available_zones');
  }
  public set availableZones(value: string[] | undefined) {
    this._availableZones = value;
  }
  public resetAvailableZones() {
    this._availableZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZonesInput() {
    return this._availableZones
  }

  // cool_down_time - computed: false, optional: true, required: false
  private _coolDownTime?: number | undefined; 
  public get coolDownTime() {
    return this.getNumberAttribute('cool_down_time');
  }
  public set coolDownTime(value: number | undefined) {
    this._coolDownTime = value;
  }
  public resetCoolDownTime() {
    this._coolDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownTimeInput() {
    return this._coolDownTime
  }

  // current_instance_number - computed: true, optional: false, required: false
  public get currentInstanceNumber() {
    return this.getNumberAttribute('current_instance_number');
  }

  // delete_instances - computed: false, optional: true, required: false
  private _deleteInstances?: string | undefined; 
  public get deleteInstances() {
    return this.getStringAttribute('delete_instances');
  }
  public set deleteInstances(value: string | undefined) {
    this._deleteInstances = value;
  }
  public resetDeleteInstances() {
    this._deleteInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInstancesInput() {
    return this._deleteInstances
  }

  // delete_publicip - computed: false, optional: true, required: false
  private _deletePublicip?: boolean | cdktf.IResolvable | undefined; 
  public get deletePublicip() {
    return this.getBooleanAttribute('delete_publicip') as any;
  }
  public set deletePublicip(value: boolean | cdktf.IResolvable | undefined) {
    this._deletePublicip = value;
  }
  public resetDeletePublicip() {
    this._deletePublicip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePublicipInput() {
    return this._deletePublicip
  }

  // desire_instance_number - computed: false, optional: true, required: false
  private _desireInstanceNumber?: number | undefined; 
  public get desireInstanceNumber() {
    return this.getNumberAttribute('desire_instance_number');
  }
  public set desireInstanceNumber(value: number | undefined) {
    this._desireInstanceNumber = value;
  }
  public resetDesireInstanceNumber() {
    this._desireInstanceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desireInstanceNumberInput() {
    return this._desireInstanceNumber
  }

  // health_periodic_audit_grace_period - computed: false, optional: true, required: false
  private _healthPeriodicAuditGracePeriod?: number | undefined; 
  public get healthPeriodicAuditGracePeriod() {
    return this.getNumberAttribute('health_periodic_audit_grace_period');
  }
  public set healthPeriodicAuditGracePeriod(value: number | undefined) {
    this._healthPeriodicAuditGracePeriod = value;
  }
  public resetHealthPeriodicAuditGracePeriod() {
    this._healthPeriodicAuditGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPeriodicAuditGracePeriodInput() {
    return this._healthPeriodicAuditGracePeriod
  }

  // health_periodic_audit_method - computed: false, optional: true, required: false
  private _healthPeriodicAuditMethod?: string | undefined; 
  public get healthPeriodicAuditMethod() {
    return this.getStringAttribute('health_periodic_audit_method');
  }
  public set healthPeriodicAuditMethod(value: string | undefined) {
    this._healthPeriodicAuditMethod = value;
  }
  public resetHealthPeriodicAuditMethod() {
    this._healthPeriodicAuditMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPeriodicAuditMethodInput() {
    return this._healthPeriodicAuditMethod
  }

  // health_periodic_audit_time - computed: false, optional: true, required: false
  private _healthPeriodicAuditTime?: number | undefined; 
  public get healthPeriodicAuditTime() {
    return this.getNumberAttribute('health_periodic_audit_time');
  }
  public set healthPeriodicAuditTime(value: number | undefined) {
    this._healthPeriodicAuditTime = value;
  }
  public resetHealthPeriodicAuditTime() {
    this._healthPeriodicAuditTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPeriodicAuditTimeInput() {
    return this._healthPeriodicAuditTime
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_terminate_policy - computed: false, optional: true, required: false
  private _instanceTerminatePolicy?: string | undefined; 
  public get instanceTerminatePolicy() {
    return this.getStringAttribute('instance_terminate_policy');
  }
  public set instanceTerminatePolicy(value: string | undefined) {
    this._instanceTerminatePolicy = value;
  }
  public resetInstanceTerminatePolicy() {
    this._instanceTerminatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTerminatePolicyInput() {
    return this._instanceTerminatePolicy
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // lb_listener_id - computed: false, optional: true, required: false
  private _lbListenerId?: string | undefined; 
  public get lbListenerId() {
    return this.getStringAttribute('lb_listener_id');
  }
  public set lbListenerId(value: string | undefined) {
    this._lbListenerId = value;
  }
  public resetLbListenerId() {
    this._lbListenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbListenerIdInput() {
    return this._lbListenerId
  }

  // max_instance_number - computed: false, optional: true, required: false
  private _maxInstanceNumber?: number | undefined; 
  public get maxInstanceNumber() {
    return this.getNumberAttribute('max_instance_number');
  }
  public set maxInstanceNumber(value: number | undefined) {
    this._maxInstanceNumber = value;
  }
  public resetMaxInstanceNumber() {
    this._maxInstanceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceNumberInput() {
    return this._maxInstanceNumber
  }

  // min_instance_number - computed: false, optional: true, required: false
  private _minInstanceNumber?: number | undefined; 
  public get minInstanceNumber() {
    return this.getNumberAttribute('min_instance_number');
  }
  public set minInstanceNumber(value: number | undefined) {
    this._minInstanceNumber = value;
  }
  public resetMinInstanceNumber() {
    this._minInstanceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceNumberInput() {
    return this._minInstanceNumber
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: string[] | undefined; 
  public get notifications() {
    return this.getListAttribute('notifications');
  }
  public set notifications(value: string[] | undefined) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications
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

  // scaling_configuration_id - computed: true, optional: true, required: false
  private _scalingConfigurationId?: string | undefined; 
  public get scalingConfigurationId() {
    return this.getStringAttribute('scaling_configuration_id');
  }
  public set scalingConfigurationId(value: string | undefined) {
    this._scalingConfigurationId = value;
  }
  public resetScalingConfigurationId() {
    this._scalingConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationIdInput() {
    return this._scalingConfigurationId
  }

  // scaling_group_name - computed: false, optional: false, required: true
  private _scalingGroupName?: string; 
  public get scalingGroupName() {
    return this.getStringAttribute('scaling_group_name');
  }
  public set scalingGroupName(value: string) {
    this._scalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupNameInput() {
    return this._scalingGroupName
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // lbaas_listeners - computed: false, optional: true, required: false
  private _lbaasListeners?: AsGroupV1LbaasListeners[] | undefined; 
  public get lbaasListeners() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lbaas_listeners') as any;
  }
  public set lbaasListeners(value: AsGroupV1LbaasListeners[] | undefined) {
    this._lbaasListeners = value;
  }
  public resetLbaasListeners() {
    this._lbaasListeners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbaasListenersInput() {
    return this._lbaasListeners
  }

  // networks - computed: false, optional: false, required: true
  private _networks?: AsGroupV1Networks[]; 
  public get networks() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('networks') as any;
  }
  public set networks(value: AsGroupV1Networks[]) {
    this._networks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: AsGroupV1SecurityGroups | undefined; 
  private __securityGroupsOutput = new AsGroupV1SecurityGroupsOutputReference(this as any, "security_groups", true);
  public get securityGroups() {
    return this.__securityGroupsOutput;
  }
  public putSecurityGroups(value: AsGroupV1SecurityGroups | undefined) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AsGroupV1Timeouts | undefined; 
  private __timeoutsOutput = new AsGroupV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AsGroupV1Timeouts | undefined) {
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
      available_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availableZones),
      cool_down_time: cdktf.numberToTerraform(this._coolDownTime),
      delete_instances: cdktf.stringToTerraform(this._deleteInstances),
      delete_publicip: cdktf.booleanToTerraform(this._deletePublicip),
      desire_instance_number: cdktf.numberToTerraform(this._desireInstanceNumber),
      health_periodic_audit_grace_period: cdktf.numberToTerraform(this._healthPeriodicAuditGracePeriod),
      health_periodic_audit_method: cdktf.stringToTerraform(this._healthPeriodicAuditMethod),
      health_periodic_audit_time: cdktf.numberToTerraform(this._healthPeriodicAuditTime),
      instance_terminate_policy: cdktf.stringToTerraform(this._instanceTerminatePolicy),
      lb_listener_id: cdktf.stringToTerraform(this._lbListenerId),
      max_instance_number: cdktf.numberToTerraform(this._maxInstanceNumber),
      min_instance_number: cdktf.numberToTerraform(this._minInstanceNumber),
      notifications: cdktf.listMapper(cdktf.stringToTerraform)(this._notifications),
      region: cdktf.stringToTerraform(this._region),
      scaling_configuration_id: cdktf.stringToTerraform(this._scalingConfigurationId),
      scaling_group_name: cdktf.stringToTerraform(this._scalingGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      lbaas_listeners: cdktf.listMapper(asGroupV1LbaasListenersToTerraform)(this._lbaasListeners),
      networks: cdktf.listMapper(asGroupV1NetworksToTerraform)(this._networks),
      security_groups: asGroupV1SecurityGroupsToTerraform(this._securityGroups),
      timeouts: asGroupV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
