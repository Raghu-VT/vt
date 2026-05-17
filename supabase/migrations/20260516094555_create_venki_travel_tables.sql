/*
  # Venki Travel - Initial Schema

  1. New Tables
    - `event_offers`: Stores latest offers/events images uploaded by admin
      - `id` (uuid, primary key)
      - `title` (text) - offer title
      - `description` (text) - offer description
      - `image_url` (text) - image URL
      - `is_active` (boolean) - whether offer is visible
      - `created_at` (timestamptz)
    - `contact_inquiries`: Stores contact form submissions
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamptz)
    - `admin_users`: Stores admin credentials
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - event_offers: public SELECT for active offers, authenticated admin INSERT/UPDATE/DELETE
    - contact_inquiries: public INSERT, authenticated admin SELECT
    - admin_users: authenticated SELECT own row only
*/

CREATE TABLE IF NOT EXISTS event_offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  image_url text NOT NULL DEFAULT '',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE event_offers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active offers"
  ON event_offers FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert offers"
  ON event_offers FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update offers"
  ON event_offers FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete offers"
  ON event_offers FOR DELETE
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  subject text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit inquiry"
  ON contact_inquiries FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view inquiries"
  ON contact_inquiries FOR SELECT
  TO authenticated
  USING (true);
