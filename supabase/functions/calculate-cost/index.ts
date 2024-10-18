// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { corsHeaders } from "../_shared/cors.ts";

interface Request {
  branches: number;
  employees: number;
}

Deno.serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { branches, employees } = (await req.json()) as Request;

    const costForBranches = calculateBranchesCost(branches);
    const costForEmployees = calculateEmployeesCost(employees);
    const totalCost = costForBranches + costForEmployees;

    return new Response(
      JSON.stringify({
        costForBranches,
        costForEmployees,
        totalCost,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 500,
      }
    );
  }
});

function calculateBranchesCost(branches: number): number {
  const COST_FOR_FIRST_BRANCH = 30000;
  const COST_FOR_2_TO_5_BRANCHES = 12000;
  const COST_FOR_6_TO_10_BRANCHES = 10000;
  const COST_FOR_11_AND_MORE_BRANCHES = 8000;

  let branches_total_cost = COST_FOR_FIRST_BRANCH;
  if (branches < 5) {
    branches_total_cost += (branches - 1) * COST_FOR_2_TO_5_BRANCHES;
    return branches_total_cost;
  }

  if (branches < 10) {
    branches_total_cost += 4 * COST_FOR_2_TO_5_BRANCHES;
    branches_total_cost += (branches - 5) * COST_FOR_6_TO_10_BRANCHES;

    return branches_total_cost;
  }

  branches_total_cost += 4 * COST_FOR_2_TO_5_BRANCHES;
  branches_total_cost += 5 * COST_FOR_6_TO_10_BRANCHES;
  branches_total_cost += (branches - 10) * COST_FOR_11_AND_MORE_BRANCHES;

  return branches_total_cost;
}

function calculateEmployeesCost(employees: number) {
  const COST_FOR_FIRST_3_EMPLOYEES = 0;
  const COST_FOR_4_TO_10_EMPLOYEES = 2000;
  const COST_FOR_11_AND_MORE_EMPLOYEES = 1000;

  let employees_total_cost = 0;
  if (employees <= 3) {
    return employees_total_cost;
  }

  if (employees <= 10) {
    employees_total_cost += (employees - 3) * COST_FOR_4_TO_10_EMPLOYEES;
    return employees_total_cost;
  }

  employees_total_cost += 7 * COST_FOR_4_TO_10_EMPLOYEES;
  employees_total_cost += (employees - 10) * COST_FOR_11_AND_MORE_EMPLOYEES;

  return employees_total_cost;
}

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/calculate-cost' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
