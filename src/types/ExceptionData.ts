// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// THIS FILE WAS AUTOGENERATED
import { ExceptionDetails } from './ExceptionDetails'
import { Domain } from './Domain'
import { SeverityLevel } from './SeverityLevel'
import { DataSanitizer } from '../DataSanitizer'

interface ExceptionDataInterface{
	/**
	 * Exception chain - list of inner exceptions.
	 */
	exceptions: ExceptionDetails[] | Error[];

	/**
	 * Severity level. Mostly used to indicate exception severity level when it is reported by logging library.
	 */
	severityLevel?: SeverityLevel;

	/**
	 * Collection of custom properties.
	 */
	properties?: any;

	/**
	 * Collection of custom measurements.
	 */
	measurements?: any;
}

/**
 * An instance of Exception represents a handled or unhandled exception that occurred during execution of the monitored application.
 */
export class ExceptionData extends Domain {
	/**
	 * Schema version
	 */
	public ver: number

	/**
	 * Exception chain - list of inner exceptions.
	 */
	public exceptions: ExceptionDetails[]

	/**
	 * Severity level. Mostly used to indicate exception severity level when it is reported by logging library.
	 */
	public severityLevel: SeverityLevel

	/**
	 * Collection of custom properties.
	 */
	public properties: any

	/**
	 * Collection of custom measurements.
	 */
	public measurements: any

	constructor(options:ExceptionDataInterface) {
		super()

		this.ver = 2
		this.exceptions = []
		this.properties = DataSanitizer.sanitizeProperties(options.properties || {})
		this.measurements = DataSanitizer.sanitizeMeasurements(options.measurements || {})

		this.severityLevel = options.severityLevel

		if (options.exceptions && options.exceptions.length > 0) {
			if (options.exceptions[0] instanceof ExceptionDetails) {
				this.exceptions = options.exceptions as ExceptionDetails[]
			} else {
				this.exceptions = (options.exceptions as any[]).map((err) => new ExceptionDetails(err))
			}
		}
	}
}
