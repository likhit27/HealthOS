# Architecture

Vercel
  └── Next.js App Router
      ├── UI
      ├── Server/API
      └── Cron
          └── Supabase
              ├── Auth
              ├── PostgreSQL
              └── private Storage

Domain engine:
candidate meals → hard constraints → nutrition optimizer → variety scoring → final plan.

Important: rules are the source of truth. AI is optional later.
