# Adversary Emulation: TTPs for APT29

**Objective:** Design a safe, controlled emulation plan for APT29 techniques to validate blue team detections without impacting production systems.

## Scope

- Map techniques to **MITRE ATT&CK**: Initial Access, Defense Evasion, Exfiltration.
- Establish **guardrails**: controlled hosts, non-destructive payloads, logging-only operations.
- Define **success criteria**: alerts fired, correlation accuracy, false positive rate.

## Technique Examples

1. **T1059 - Command and Scripting Interpreter**: benign PowerShell beacon emitting logs for EDR validation.
2. **T1021 - Remote Services**: simulated lateral movement events with locked-down credentials.
3. **T1041 - Exfiltration Over C2**: mock data exfil to sinkhole endpoint; verify DLP/IDS triggers.

## Detections & Telemetry

Prioritize host EDR, Windows Event Logs (Sysmon), network IDS, and SIEM correlation. Build dashboards for rapid validation and RCA.

## Outcomes

Runbooks updated with validated detections, improved triage flow, and documented false positives with tuning recommendations.
