/**
 * Carpentry Services Database - Re-exports from Master Catalog
 * Provides seamless access to all 8 specialized service hubs and transparent rounded labor rates.
 */

export * from "./servicesMaster";
import { CARPENTER_SERVICES_MASTER, ServiceCategory, ServiceSku } from "./servicesMaster";

// Backward compatibility alias
export type ServiceItem = ServiceSku;

// Primary services array used across all components
export const CARPENTER_SERVICES: ServiceCategory[] = CARPENTER_SERVICES_MASTER;
